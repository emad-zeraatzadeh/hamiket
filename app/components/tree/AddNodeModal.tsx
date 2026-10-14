"use client";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { SubmitEvent, useState } from "react";

type AddNodeDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (label: string) => void;
};

export function AddNodeModal({ open, onClose, onSubmit }: AddNodeDialogProps) {
  const [label, setLabel] = useState("");

  const handleClose = () => {
    setLabel("");
    onClose();
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = label.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="add-node-title">
      <Box
        component="form"
        dir="rtl"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(90vw, 444px)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          outline: "none",
        }}
      >
        <Typography
          id="add-node-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          اضافه کردن نود جدید
        </Typography>

        <TextField
          autoFocus
          fullWidth
          label="نام"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          sx={{
            "& .MuiInputLabel-root": {
              left: "auto",
              right: 0,
              transformOrigin: "top right",
              transform: "translate(-14px, 16px) scale(1)",
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              transform: "translate(-14px, -9px) scale(0.75)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
          <Button type="submit" variant="outlined" disabled={!label.trim()}>
            ثبت
          </Button>
          <Button sx={{ color: "red" }} onClick={handleClose}>
            انصراف
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
