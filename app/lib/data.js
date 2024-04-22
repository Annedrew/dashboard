import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { ITEM_PER_PAGE } from "./constant";

export const fetchUsers = async (q, page) => {
    // Set case insensitive
    const regex = new RegExp(q, "i");
    
    try{
        connectToDB();
        const total_user = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {total_user, users};
    } catch (err) {
        console.log(`Failed to fetch users: ${err}`);
    }
}

export const fetchUser = async (id) => {
    try{
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(`Failed to fetch users: ${err}`);
    }
}

export const fetchProducts = async (q, page) => {
    // Set case insensitive
    const regex = new RegExp(q, "i");
    
    try{
        connectToDB();
        const total_product = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {total_product, products};
    } catch (err) {
        console.log(`Failed to fetch users: ${err}`);
    }
}

export const fetchProduct = async (id) => {
    try{
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(`Failed to fetch users: ${err}`);
    }
}