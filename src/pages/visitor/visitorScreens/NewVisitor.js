import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../../assest/helpers/api';
import * as SC from './visitorMainPageStyling';
import { FaArrowLeft } from 'react-icons/fa';

const NewVisitor = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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

        // optional: save current visitor phone
        localStorage.setItem('client', JSON.stringify(clientData.phoneNumber));

        alert(t('Success') + ': ' + t('Visitor has been saved successfully.'));
        alert(t('Please now register using your phone number to continue.'));

        navigate(-1);
      } else {
        alert(t('Error') + ': ' + t('Failed to save visitor. Please try again.'));
      }
    } catch (error) {
      console.error('Error saving visitor:', error);
      alert(t('Error') + ': ' + t('An error occurred while saving the visitor.'));
    }
  };

  return (
    <SC.Container2 dir={dir}>
      <SC.TopBar2>
        <FaArrowLeft
          size={22}
          color="#227439"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
      </SC.TopBar2>

      <SC.PageTitle>{t('New Visitor')}</SC.PageTitle>

      <SC.List>
        <SC.ListItem1>
          <SC.Label2>{t('Name')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.name}
            onChange={(e) =>
              setClientData({ ...clientData, name: e.target.value })
            }
            placeholder={t('Enter your name')}
          />
        </SC.ListItem1>

        <SC.ListItem1>
          <SC.Label2>{t('Phone')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.phoneNumber}
            onChange={(e) =>
              setClientData({ ...clientData, phoneNumber: e.target.value })
            }
            placeholder={t('Enter your phone number')}
          />
        </SC.ListItem1>

        <SC.ListItem1>
          <SC.Label2>{t('Address')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.address}
            onChange={(e) =>
              setClientData({ ...clientData, address: e.target.value })
            }
            placeholder={t('Enter your address')}
          />
        </SC.ListItem1>

        <SC.ListItem1>
          <SC.Label2>{t('Birthday')}</SC.Label2>
          <SC.Input2
            type="date"
            value={clientData.birthday}
            onChange={(e) =>
              setClientData({ ...clientData, birthday: e.target.value })
            }
          />
        </SC.ListItem1>

        <SC.ListItem1>
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
          />
        </SC.ListItem1>

        <SC.ListItem1>
          <SC.Label2>{t('Hair Type')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.hairType}
            onChange={(e) =>
              setClientData({ ...clientData, hairType: e.target.value })
            }
            placeholder={t('Enter hair type')}
          />
        </SC.ListItem1>

        <SC.ListItem1>
          <SC.Label2>{t('Notes')}</SC.Label2>
          <SC.Input2
            type="text"
            value={clientData.problemsOrNotes}
            onChange={(e) =>
              setClientData({
                ...clientData,
                problemsOrNotes: e.target.value,
              })
            }
            placeholder={t('Enter notes')}
          />
        </SC.ListItem1>
      </SC.List>

      <SC.ButtonContainer>
        <SC.Button onClick={handleSave}>{t('Save')}</SC.Button>
      </SC.ButtonContainer>
    </SC.Container2>
  );
};

export default NewVisitor;