import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../../assest/helpers/api';
import * as SC from './visitorMainPageStyling';
import { FaArrowLeft ,FaSpinner} from 'react-icons/fa';
const NewVisitor = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [saveLoading, setSaveLoading] = useState(false);

  const dir =
    i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  const [clientData, setClientData] = useState({
    _id: '',
    name: '',
    phoneNumber: '',
    address: '',
    birthday: '',
    naturalHairColor: '',
    hairType: '',
    fileOpeningDate: '',
    problemsOrNotes: '',
  });

  useEffect(() => {
    const generatedId = generateUniqueId();
    const currentDate = new Date().toISOString();

    setClientData((prevData) => ({
      ...prevData,
      _id: generatedId,
      fileOpeningDate: currentDate,
    }));
  }, []);



  const generateUniqueId = () => {
    return `client_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  };

const handleSave = async () => {
  if (
    !clientData.name ||
    !clientData.phoneNumber ||
    !clientData.birthday ||
    !clientData.address ||
    !clientData.naturalHairColor ||
    !clientData.hairType
  ) {
    alert(t('Error') + ': ' + t('All fields are required.'));
    return;
  }

  try {
    setSaveLoading(true);

    const response = await Functions.featchsaveClient(clientData);

    if (response) {
      const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');

      const updatedClients = cachedClients.map((client) =>
        client._id === clientData._id ? clientData : client
      );

      if (!cachedClients.some((client) => client._id === clientData._id)) {
        updatedClients.push(clientData);
      }

      localStorage.setItem('clients', JSON.stringify(updatedClients));
      localStorage.setItem('client', JSON.stringify(clientData.phoneNumber));

      alert(t('Success') + ': ' + t('Visitor has been saved successfully.'));
      navigate(-1);
    } else {
      alert(t('Error') + ': ' + t('Failed to save visitor. Please try again.'));
    }
  } catch (error) {
    console.error('Error saving visitor:', error);
    alert(t('Error') + ': ' + t('An error occurred while saving the visitor.'));
  } finally {
    setSaveLoading(false);
  }
};
  return (
    <SC.Container2 dir={dir}>
      <SC.TopBar2>
        <SC.BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft size={22} color="#227439" />
        </SC.BackButton>
      </SC.TopBar2>
  
      <SC.PageTitle>{t('New Visitor')}</SC.PageTitle>
      <SC.FormSubTitle>
        {t('Please fill in your details to continue')}
      </SC.FormSubTitle>
  
      <SC.FormCard>
        <SC.FormGroup>
          <SC.Label2>{t('Name')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.name}
            onChange={(e) =>
              setClientData({ ...clientData, name: e.target.value })
            }
            placeholder={t('Enter your name')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Phone')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.phoneNumber}
            onChange={(e) =>
              setClientData({ ...clientData, phoneNumber: e.target.value })
            }
            placeholder={t('Enter your phone number')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Address')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.address}
            onChange={(e) =>
              setClientData({ ...clientData, address: e.target.value })
            }
            placeholder={t('Enter your address')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Birthday')}</SC.Label2>
          <SC.Input2
            type="date"
            value={clientData.birthday}
            onChange={(e) =>
              setClientData({ ...clientData, birthday: e.target.value })
            }
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Natural Hair Color')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.naturalHairColor}
            onChange={(e) =>
              setClientData({
                ...clientData,
                naturalHairColor: e.target.value,
              })
            }
            placeholder={t('Enter natural hair color')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Hair Type')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.hairType}
            onChange={(e) =>
              setClientData({ ...clientData, hairType: e.target.value })
            }
            placeholder={t('Enter hair type')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.FormGroup>
          <SC.Label2>{t('Notes')}</SC.Label2>
          <SC.TextArea2
            value={clientData.problemsOrNotes}
            onChange={(e) =>
              setClientData({
                ...clientData,
                problemsOrNotes: e.target.value,
              })
            }
            placeholder={t('Enter notes')}
            disabled={saveLoading}
          />
        </SC.FormGroup>
  
        <SC.ButtonContainer>
          <SC.Button onClick={handleSave} disabled={saveLoading}>
            {saveLoading ? (
              <>
                <FaSpinner className="spin" style={{ marginRight: '8px' }} />
                {t('Saving...')}
              </>
            ) : (
              t('Save')
            )}
          </SC.Button>
      </SC.ButtonContainer>
      </SC.FormCard>
    </SC.Container2>
  );
};

export default NewVisitor;


