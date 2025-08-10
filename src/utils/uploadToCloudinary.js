const uploadToCloudinary = async (file) => {
  const cloudName = "dhd25hezm";
  const uploadPreset = "critiqo";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error", err);
    return null;
  }
};

export default uploadToCloudinary;
