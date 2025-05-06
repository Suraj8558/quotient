import { Theme } from "@mui/material";
export const GridStyle = () => ({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  width: "100%",
});

export const AppBarStyles = () => ({
  zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  backgroundColor: "background.paper",
  boxShadow: "none",
});

export const ToolbarStyles = () => ({
  zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  backgroundColor: "background.paper",
  boxShadow: "none",
  borderBottom: "1px solid #E0E0E0",
});
