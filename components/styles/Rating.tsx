import Rating from "@mui/material/Rating";

export default function HalfRating({ value }: { value: number }) {
  return (
    <Rating
      name="half-rating-read"
      defaultValue={value}
      precision={0.5}
      readOnly
    />
  );
}
