import React, { useState, useEffect } from 'react';
import * as SC from '../goodsAndSuppliersStyling';
import { useTranslation } from 'react-i18next';
import * as Functions from '../../../assest/helpers/api';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

const GoodsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const [goodsData, setGoodsData] = useState({
    _id: '',
    name: '',
    quantity: '',
    price: '',
    notes: '',
  });
  const handleBack = () => {
    navigate('/goods-and-suppliers');
  };
  useEffect(() => {
    const generatedId = generateUniqueId();
    setGoodsData((prevData) => ({
      ...prevData,
      _id: generatedId,
    }));
  }, []);

  // Function to generate unique ID
  const generateUniqueId = () => {
    return `good_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSave = async () => {
    if (!goodsData.name || !goodsData.quantity) {
      window.alert(t('Please fill in all required fields.'));
      return;
    }

    try {
      const response = await Functions.featchCreateGoods(goodsData);
      if (response) {
        setGoodsData({ _id: '', name: '', quantity: '', price: '', notes: '' });
        window.alert(t('Success') + ': ' + t('New goods added!'));
      } else {
        window.alert(t('Error') + ': ' + t('Failed to add goods. Please try again.'));
      }
    } catch (error) {
      console.error('Error adding goods:', error);
      window.alert(t('Error') + ': ' + t('An error occurred while adding the goods.'));
    }

    navigate.goBack(); 
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

      {/* Page Title */}
      <SC.ModalTitle>{t('Add Goods')}</SC.ModalTitle>

      {/* Form Fields */}
      <SC.InputField
        type="text"
        placeholder={t('Enter goods name')}
        value={goodsData.name}
        onChange={(e) => setGoodsData({ ...goodsData, name: e.target.value })}
      />
      <SC.InputField
        type="number"
        placeholder={t('Enter quantity')}
        value={goodsData.quantity}
        onChange={(e) => setGoodsData({ ...goodsData, quantity: e.target.value })}
      />
      <SC.InputField
        type="number"
        placeholder={t('Enter price')}
        value={goodsData.price}
        onChange={(e) => setGoodsData({ ...goodsData, price: e.target.value })}
      />
      <SC.InputField
        type="text"
        placeholder={t('Enter notes')}
        value={goodsData.notes}
        onChange={(e) => setGoodsData({ ...goodsData, notes: e.target.value })}
      />

      {/* Save Button */}
      <SC.ButtonContainer>
        <SC.SaveButton onClick={handleSave}>
          <SC.ButtonText>{t('Save')}</SC.ButtonText>
        </SC.SaveButton>
      </SC.ButtonContainer>
    </SC.Container>
  );
};

export default GoodsPage;