import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
const ProductCard = ({ price, title, stock, imageUrl, id, description }) => {
  // const { price, title, stock } = props;

  return (
    <Card
      sx={{
        width: { xs: 250, md: 345 },
        backgroundColor: {
          xs: "red",
          sm: "blue",
          md: "green",
        },
      }}
    >
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
