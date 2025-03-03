import React, { useState } from 'react';
import * as SC from './innerStyle'; 
import { useTranslation } from 'react-i18next';
import * as Functions from '../../../assest/helpers/api'; 
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import { constructFromSymbol } from 'date-fns/constants';

const GoodsDetailComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const good = location.state?.goods;
  const [name, setName] = useState(good?.name || '');
  const [quantity, setQuantity] = useState(good?.quantity?.toString() || '');
  const [price, setPrice] = useState(good?.price?.toString() || '');
  const [notes, setNotes] = useState(good?.notes || '');

  const handleSave = async () => {
    if (!name) {
      window.alert(t('Error') + ': ' + t('Please fill in all required fields.'));
      return;
    }

    const updatedGoods = {
      ...good,
      name,
      quantity: Number(quantity), 
      price: Number(price), 
      notes,
    };

    try {
      const response = await Functions.fetchUpdateGoods(updatedGoods);
      if (response) {
        setTimeout(() => {
          window.alert(t('Success') + ': ' + t('Goods details have been updated.'));
        }, 100);
      } else {
        window.alert(t('Error') + ': ' + t('Failed to update goods. Please try again.'));
      }
    } catch (error) {
      console.error('Error updating goods:', error);
      window.alert(t('Error') + ': ' + t('An error occurred while updating the goods.'));
    }
  };
  const handleBack = () => {
    navigate(-1)
  };
  const handleDelete = async () => {
    try {
      const response = await Functions.fetchDeleteGoods(good._id);
      if (response) {
        window.alert(t('Success') + ': ' + t('Goods have been deleted.'));
        navigate(-1)
      } else {
        window.alert(t('Error') + ': ' + t('Failed to delete goods.'));
      }
    } catch (error) {
      console.error('Error deleting goods:', error);
      window.alert(t('Error') + ': ' + t('An error occurred while deleting the goods.'));
    }
  };

  return (
    <SC.Container>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>

      {/* Title */}
      <SC.Title>{t('Edit Goods')}</SC.Title>

      {/* Editable Fields */}
      <SC.DetailContainer>
        <SC.Label>{t('Name')}</SC.Label>
        <SC.Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('Enter name')}
        />

        <SC.Label>{t('Quantity')}</SC.Label>
        <SC.Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder={t('Enter quantity')}
        />

        <SC.Label>{t('Price')}</SC.Label>
        <SC.Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={t('Enter price')}
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

export default GoodsDetailComponent;