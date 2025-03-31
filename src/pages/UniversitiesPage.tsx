
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [branchesCount, setBranchesCount] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Turkey");
  const [city, setCity] = useState("Istanbul");
  const [universityType, setUniversityType] = useState("Public");
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentUniversity, setCurrentUniversity] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [universityToDelete, setUniversityToDelete] = useState(null);
  const [logo, setLogo] = useState(null); 

  const navigate = useNavigate();

  useEffect(() => {
    fetchUniversities();
  }, []);

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const fetchUniversities = async () => {
    try {
      // الاحتفاظ بنموذج بيانات جامعات للعرض
      const mockUniversities = [
        { id: 1, name: "Istanbul University", country: "Turkey", city: "Istanbul", universityType: "Public", logoUrl: "/images/university1.png" },
        { id: 2, name: "Ankara University", country: "Turkey", city: "Ankara", universityType: "Public", logoUrl: "/images/university2.png" },
        { id: 3, name: "KKTC University", country: "KKTC", city: "Lefkoşa", universityType: "Private", logoUrl: "/images/university3.png" },
      ];
      setUniversities(mockUniversities);
      
      // بيانات نموذجية لعدد الفروع
      const mockCounts = { 1: 3, 2: 2, 3: 1 };
      setBranchesCount(mockCounts);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  const handleViewBranches = (universityId) => {
    navigate(`/branches/${universityId}`);
  };

  const handleAddOrUpdateUniversity = async (event) => {
    event.preventDefault();
    setError("");

    if (!name || !country || !city || !universityType) {
      setError("Please enter all required fields.");
      return;
    }

    try {
      if (editMode && currentUniversity) {
        // Simulate update university
        const updatedUniversities = universities.map(uni => 
          uni.id === currentUniversity.id 
            ? {...uni, name, country, city, universityType} 
            : uni
        );
        setUniversities(updatedUniversities);
      } else {
        // Simulate add university
        const newUniversity = {
          id: universities.length + 1,
          name,
          country,
          city,
          universityType,
          logoUrl: logo ? URL.createObjectURL(logo) : null
        };
        setUniversities([...universities, newUniversity]);
      }

      setShowForm(false);
      setEditMode(false);
      setName("");
      setCountry("Turkey");
      setCity("Istanbul");
      setUniversityType("Public");
      setLogo(null);
    } catch (error) {
      console.error("Error saving university:", error);
      setError("An error occurred while saving the university.");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Universities ({universities.length})
      </Typography>

      <Button variant="contained" color="success" sx={{ mb: 2 }} onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add University"}
      </Button>

      {showForm && (
        <Paper sx={{ p: 3, mb: 4, maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            {editMode ? "Edit University" : "Add a New University"}
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleAddOrUpdateUniversity}>
            <TextField
              label="University Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                label="Country"
              >
                <MenuItem value="Turkey">Turkey</MenuItem>
                <MenuItem value="KKTC">KKTC</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>City</InputLabel>
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="City"
              >
                <MenuItem value="Istanbul">Istanbul</MenuItem>
                <MenuItem value="Ankara">Ankara</MenuItem>
                <MenuItem value="Lefkoşa">Lefkoşa</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>University Type</InputLabel>
              <Select
                value={universityType}
                onChange={(e) => setUniversityType(e.target.value)}
                label="University Type"
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mt: 2 }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange} 
                style={{ marginTop: "10px" }}
              />
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {editMode ? "Update" : "Submit"}
            </Button>
          </form>
        </Paper>
      )}

      <Table sx={{ marginTop: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell>University Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Branches Count</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map((university) => (
            <TableRow key={university.id}>
              <TableCell>
                {university.logoUrl && (
                  <Box
                    component="img"
                    src={university.logoUrl}
                    alt={university.name}
                    sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                )}
              </TableCell>
              <TableCell>{university.name}</TableCell>
              <TableCell>{university.country}</TableCell>
              <TableCell>{university.city}</TableCell>
              <TableCell>{university.universityType}</TableCell>
              <TableCell>{branchesCount[university.id] || 0}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleViewBranches(university.id)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UniversitiesPage;
