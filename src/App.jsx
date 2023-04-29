import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("apple");

  useEffect(() => {
    axios
      .get(`https://lexica.art/api/v1/search?q=${input}`)
      .then((item) => setData(item.data.images));
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">DOGA ICIN ARAT</Typography>
        <Typography>
          BU SITE BIR YAPAY ZEKA ILE FOTOGRAF OLUSTURMA ARACIDIR, ARATMALARI
          INGILIZCE YAPMANIZI ONERIRIZ
        </Typography>
        <Typography>
          KISA SUREDE FAZLA ARAMA YAPMANIZA SITEYI YORDUGU ICIN IZIN
          VERILMEMEKTEDIR
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "300px",
          gap: "15px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="ARATINIZ"
          variant="outlined"
          value={input}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              axios
                .get(`https://lexica.art/api/v1/search?q=${input}`)
                .then((item) => setData(item.data.images));
            }
          }}
          onChange={(e) => {
            setInput(() => e.target.value);
          }}
        />
        <Button
          onClick={() => {
            axios
              .get(`https://lexica.art/api/v1/search?q=${input}`)
              .then((item) => setData(item.data.images));
          }}
          sx={{ width: "150px", height: "50px" }}
          variant="outlined"
        >
          ARAT
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((img, idx) => (
          <Box sx={{ width: { sm: "32%", md: "20%" } }}>
            <a href={img.src} target="_blank">
              <img
                style={{
                  borderRadius: "15px",
                  width: "90%",
                  height: "150px",
                }}
                src={img.src}
              />
            </a>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default App;
