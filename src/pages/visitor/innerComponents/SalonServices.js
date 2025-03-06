import React from 'react';
import * as SC from './StyledInnerComponents'; // Import the styled components
import { useTranslation } from 'react-i18next';
import { FaCut } from 'react-icons/fa'; // FontAwesome for vector icons
import eyebrow from '../../../assest/icons/eyebrow.png';
import straightner from '../../../assest/icons/straight-hair.png';
import extention from '../../../assest/icons/extention.png';
import hairDye from '../../../assest/icons/hair-dye.png';
import makeover from '../../../assest/icons/makeover.png';
import hairstyle from '../../../assest/icons/makeover.png';

const SalonServices = () => {
    const { t } = useTranslation();
    
    // Define services with appropriate icons (SVG or Images)
    const services = [
        { id: 1, name: t('Haircut & Blow Dry'), icon: <FaCut size={35} color="#BF9F00" />, type: 'vector' },
        { id: 2, name: t('Hair Straightening'), icon: straightner, type: 'image' },
        { id: 3, name: t('Hair Extensions'), icon: extention, type: 'image' },
        { id: 4, name: t('Hair Coloring'), icon: hairDye, type: 'image' },
        { id: 5, name: t('Makeup'), icon: makeover, type: 'image' },
        { id: 6, name: t('Hair Styling'), icon: hairstyle, type: 'image' },
        { id: 7, name: t('Eyebrows'), icon: eyebrow, type: 'image' },
    ];

    return (
        <SC.ScrollContainer>
            {services.map((service) => (
                <SC.Container key={service.id}>
                    <SC.ServiceCard>
                        {service.type === 'vector' ? (
                            service.icon
                        ) : (
                            <SC.ServiceImage src={service.icon} alt={service.name} />
                        )}
                    </SC.ServiceCard>
                    <SC.ServiceName>{service.name}</SC.ServiceName>
                </SC.Container>
            ))}
        </SC.ScrollContainer>
    );
};

export default SalonServices;