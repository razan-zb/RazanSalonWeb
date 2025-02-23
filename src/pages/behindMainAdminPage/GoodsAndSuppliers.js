import React, { useState, useEffect } from 'react';
import * as SC from './goodsAndSuppliersStyling'; // Import styled-components
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import { FaArrowLeft } from 'react-icons/fa'; 

const GoodsAndSuppliers = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [goods, setGoods] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const goodsData = await Functions.fetchGoodsData();
        setGoods(goodsData);

        const suppliersData = await Functions.fetchSuppliersData();
        setSuppliers(suppliersData);
      } catch (error) {
        alert(t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>{t('Loading...')}</p>;
  }
  const handleBack = () => {
    navigate(-1); // Go back
  };
  return (
    <SC.Container>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#1D1D1B"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>
    
      {/* Title */}
      <SC.Title2>{t('Suppliers and Goods')}</SC.Title2>

      {/* Suppliers List */}
      <SC.SectionTitle>{t('Suppliers List')}</SC.SectionTitle>
      <SC.ScrollContainer>
        {suppliers.length > 0 ? (
          suppliers.map((supplier) => (
            <SC.Card key={supplier._id} onClick={() => navigate(`/edit-supplier`, { state: { supplier: supplier }})}>
              <SC.CardContent>
                <SC.CardText>{t('Name')}: {supplier.name}</SC.CardText>
                <SC.CardText>{t('Phone')}: {supplier.phoneNumber}</SC.CardText>
                <SC.CardText>{t('Email')}: {supplier.email}</SC.CardText>
                <SC.CardText>{t('Address')}: {supplier.address}</SC.CardText>
                <SC.CardText>{t('Notes')}: {supplier.notes}</SC.CardText>
              </SC.CardContent>
            </SC.Card>
          ))
        ) : (
          <SC.NoDataMessage>{t('No suppliers found.')}</SC.NoDataMessage>
        )}
    </SC.ScrollContainer>

      {/* Add Supplier Button */}
      <SC.AddButton onClick={() => navigate('/supplier-modal')}>
        ➕ {t('Add New Supplier')}
      </SC.AddButton>

      {/* Goods List */}
      <SC.SectionTitle>{t('Goods List')}</SC.SectionTitle>
      <SC.ScrollContainer>
        {goods.length > 0 ? (
          goods.map((good) => (
            <SC.Card key={good._id} onClick={() => navigate(`/edit-goods`, { state: { goods: good } })}>
              <SC.CardContent>
                <SC.CardText>{t('Name')}: {good.name}</SC.CardText>
                <SC.CardText>{t('Quantity')}: {good.quantity}</SC.CardText>
                <SC.CardText>{t('Price')}: {good.price}</SC.CardText>
                <SC.CardText>{t('Notes')}: {good.notes}</SC.CardText>
              </SC.CardContent>
            </SC.Card>
          ))
        ) : (
          <SC.NoDataMessage>{t('No goods found.')}</SC.NoDataMessage>
        )}
    </SC.ScrollContainer>

      {/* Add Product Button */}
      <SC.AddButton onClick={() => navigate('/goods-modal')}>
        ➕ {t('Add New Product')}
      </SC.AddButton>
    </SC.Container>
  );
};

export default GoodsAndSuppliers;