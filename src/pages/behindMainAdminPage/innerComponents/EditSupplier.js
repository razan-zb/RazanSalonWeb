import React, { useState } from 'react';
import * as SC from './innerStyle'; // Import your styled components
import { useTranslation } from 'react-i18next';

import * as Functions from '../../../assest/helpers/api'; // API functions
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import { useLocation } from 'react-router-dom';

const EditGoods = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const supplier = location.state?.supplier;

  // State for editable fields
  const [name, setName] = useState(supplier?.name || '');
  const [phoneNumber, setPhone] = useState(supplier?.phoneNumber || '');
  const [email, setEmail] = useState(supplier?.email || '');
  const [address, setAddress] = useState(supplier?.address || '');
  const [notes, setNotes] = useState(supplier?.notes || '');

  const handleBack = () => {
    navigate(-1)
  };
  // Handle Save
  const handleSave = async () => {
    if (!name) {
      alert(t('Error') + ': ' + t('All fields are required.'));
      return;
    }

    const updatedSupplier = {
      ...supplier,
      name,
      phoneNumber,
      email,
      address,
      notes,
    };

    try {
      const response = await Functions.fetchUpdateSuppliers(updatedSupplier);
      if (response) {
          // Update local cache
          const cachedSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
          
          // Find the index of the updated supplier
          const updatedSuppliersList = cachedSuppliers.map((supplier) =>
              supplier._id === updatedSupplier._id ? updatedSupplier : supplier
          );
          
          // Update the cache
          localStorage.setItem('suppliers', JSON.stringify(updatedSuppliersList));
  
          // Show success message
          alert(t('Success') + ': ' + t('Supplier details have been updated.'));
      } else {
          alert(t('Error') + ': ' + t('Failed to update supplier. Please try again.'));
      }
  } catch (error) {
      console.error('Error updating supplier:', error);
      alert(t('Error') + ': ' + t('An error occurred while updating the supplier.'));
  }
  };

  // Handle Delete
  const handleDelete = async () => {
    try {
        const response = await Functions.fetchDeleteSupplier(supplier._id);
        if (response) {
            // Update local cache
            const cachedSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
            
            // Remove the deleted supplier from the cache
            const updatedSuppliersList = cachedSuppliers.filter((item) => item._id !== supplier._id);
            
            // Update the cache
            localStorage.setItem('suppliers', JSON.stringify(updatedSuppliersList));
            
            // Navigate back to the previous screen
            alert(t('Success') + ': ' + t('Supplier has been deleted.'));
            navigate(-1);
        } else {
            alert(t('Error') + ': ' + t('Failed to delete supplier.'));
        }
    } catch (error) {
        console.error('Error deleting supplier:', error);
        alert(t('Error') + ': ' + t('An error occurred while deleting the supplier.'));
    }
};

  return (
    <SC.Container>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>

      {/* Title */}
      <SC.Title>{t('Edit Supplier')}</SC.Title>

      {/* Editable Fields */}
      <SC.DetailContainer>
        <SC.Label>{t('Name')}</SC.Label>
        <SC.Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('Enter name')}
        />

        <SC.Label>{t('Phone')}</SC.Label>
        <SC.Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t('Enter phone number')}
        />

        <SC.Label>{t('Email')}</SC.Label>
        <SC.Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('Enter email')}
        />

        <SC.Label>{t('Address')}</SC.Label>
        <SC.Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={t('Enter address')}
        />

        <SC.Label>{t('Notes')}</SC.Label>
        <SC.TextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t('Enter notes')}
        />
      </SC.DetailContainer>

      {/* Buttons */}
      <SC.ButtonContainer>
        <SC.Button onClick={handleSave}>
          <SC.ButtonText>{t('Save')}</SC.ButtonText>
        </SC.Button>
        <SC.DeleteButton onClick={handleDelete}>
          <SC.ButtonText>{t('Delete')}</SC.ButtonText>
        </SC.DeleteButton>
      </SC.ButtonContainer>
    </SC.Container>
  );
};

export default EditGoods;