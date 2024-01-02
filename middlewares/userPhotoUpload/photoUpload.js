const photoUpload = (req, res, next) => {
  const upload = uploader(
    "photo",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, .jpeg or .png format allowed!"
  );
};

module.exports = photoUpload;
