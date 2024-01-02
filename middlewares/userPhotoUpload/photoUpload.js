const uploader = require("../../utilities/singleUploader");

const photoUpload = (req, res, next) => {
  const upload = uploader(
    "user",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, .jpeg or .png format allowed!"
  );
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          photo: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};

module.exports = photoUpload;
