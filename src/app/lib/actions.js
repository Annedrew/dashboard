"use server";

import { connectToDB } from "./connect";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(`Failed to add user to database. Error: ${error}`);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, price, stock, category, description } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      price,
      stock,
      category,
      description,
    });
    await newProduct.save();
  } catch (error) {
    console.log(`Failed to add product to database. Error: ${error}`);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};


export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(`Failed to delete user. Error: ${error}`);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(`Failed to delete product. Error: ${error}`);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username, 
      email, 
      password, 
      phone, 
      address, 
      isAdmin, 
      isActive,
    }

    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(`Failed to update user. Error: ${error}`);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, category, description } = Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title, 
      price, 
      stock, 
      category, 
      description
    }

    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(`Failed to update product. Error: ${error}`);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};