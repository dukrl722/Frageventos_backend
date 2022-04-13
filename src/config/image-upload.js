import multer from "multer"
import { uuid } from "uuidv4"

const disk_storage_to_uploads = multer.diskStorage({
  destination: "public/uploads/",
  filename(req, file, cb) {
    const name = `${uuid()}-${file.originalname.replaceAll(" ", "_")}`
    return cb(null, name)
  },
})

const upload = multer({
  storage: disk_storage_to_uploads,
})

module.exports = [upload]
