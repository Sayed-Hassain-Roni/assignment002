"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const ecom_controler_1 = require("./ecom.controler");
const router = express_1.default.Router();
// Router calling controller function
router.post("/", ecom_controler_1.productControler.createProduct);
router.get("/", ecom_controler_1.productControler.getallProduct);
router.get("/:productId", ecom_controler_1.productControler.getsingleallProduct);
router.put("/:productId", ecom_controler_1.productControler.updateUser);
router.delete("/:productId", ecom_controler_1.productControler.deleteUser);
exports.ProductRouter = router;
