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
      alert(t('Please fill in all required fields.'));
      return;
    }

    try {
      const response = await Functions.featchCreateGoods(goodsData);
      if (response) {
          // Update local cache
          const cachedGoods = JSON.parse(localStorage.getItem('goods')) || [];
  
          // Add the new goods to the cache
          const updatedGoodsList = [...cachedGoods, goodsData];
  
          // Update the cache
          localStorage.setItem('goods', JSON.stringify(updatedGoodsList));
  
          // Reset the form
          setGoodsData({ _id: '', name: '', quantity: '', price: '', notes: '' });
  
          // Show success message
          alert(t('Success') + ': ' + t('New goods added!'));
      } else {
          alert(t('Error') + ': ' + t('Failed to add goods. Please try again.'));
      }
  } catch (error) {
      console.error('Error adding goods:', error);
      alert(t('Error') + ': ' + t('An error occurred while adding the goods.'));
  }

    handleBack();
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