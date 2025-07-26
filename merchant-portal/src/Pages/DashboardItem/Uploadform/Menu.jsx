import React, { useState, useRef } from 'react';
import './Menu.css';

const Menu = () => {
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    ProductName: '',
    price: '',
    description: '',
    image: null,
    imagePreview: null
  });

  const fileInputRef = useRef(null);

  const categories = [
    { value: '', label: 'Select' },
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Food', label: 'Food' },
    { value: 'E-commerce', label: 'E-commerce' }
  ];

  const subCategories = {
    'Grocery': [
      { value: '', label: 'Select' },
      { value: 'Vegetable', label: 'Vegetable' },
      { value: 'Dairy&Eggs', label: 'Dairy & Eggs' },
      { value: 'DryFruits', label: 'Dry Fruits' },
      { value: 'Fruits', label: 'Fruits' },
      { value: 'Beverage', label: 'Beverage' },
      { value: 'Meat&Sea', label: 'Meat & Sea food' }
    ],
    'Food': [
      { value: '', label: 'Select' },
      { value: 'FastFood', label: 'Fast Food' },
      { value: 'Desserts', label: 'Desserts' }
    ],
    'E-commerce': [
      { value: '', label: 'Select' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Clothing', label: 'Clothing' }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null,
      imagePreview: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="menu-page">
      <div className="form-preview-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Add New Menu Item</h2>
            
            <div className="field">
              <label htmlFor="category">Category</label>
              <select 
                name="category" 
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="subCategory">Sub-category</label>
              <select 
                name="subCategory" 
                id="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                required
                disabled={!formData.category}
              >
                {(subCategories[formData.category] || [{ value: '', label: 'Select a category first' }]).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                id="name"
                placeholder="Product Name" 
                name="ProductName" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="price">Price</label>
              <input 
                type="number"
                id="price"
                placeholder="Product Price" 
                name="price" 
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea 
                name="description" 
                id="description"
                placeholder="Write Product Description here"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="field image-upload">
              <label>Product Image</label>
              <div className="image-upload-container">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                {formData.imagePreview ? (
                  <div className="image-preview-wrapper">
                    <img 
                      src={formData.imagePreview} 
                      alt="Preview" 
                      className="image-preview"
                    />
                    <button 
                      type="button" 
                      className="remove-image-btn"
                      onClick={removeImage}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div 
                    className="upload-placeholder"
                    onClick={triggerFileInput}
                  >
                    <span>+</span>
                    <p>Click to upload image</p>
                  </div>
                )}
              </div>
            </div>
            
            <button type="submit" className="submit-btn">Add To Menu</button>
          </form>
        </div>

        <div className="preview-container">
          <h2 className="preview-title">Item Preview</h2>
          <div className="preview-card">
            {formData.imagePreview ? (
              <div className="preview-image-container">
                <img 
                  src={formData.imagePreview} 
                  alt="Product preview" 
                  className="preview-image"
                />
              </div>
            ) : (
              <div className="preview-image-placeholder">
                No image selected
              </div>
            )}
            <div className="preview-content">
              <div className="preview-header">
                <span className="preview-category">
                  {formData.category || 'Category'} {formData.subCategory && `> ${formData.subCategory}`}
                </span>
                <span className="preview-price">
                  {formData.price ? `$${parseFloat(formData.price).toFixed(2)}` : '$0.00'}
                </span>
              </div>
              <h3 className="preview-name">{formData.name || 'Product Name'}</h3>
              <p className="preview-description">
                {formData.description || 'Product description will appear here.'}
              </p>
              {!formData.name && !formData.description && (
                <div className="preview-placeholder">
                  Fill the form to see a live preview
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;