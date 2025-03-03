import React from 'react';
import * as SC from './StyledInnerComponents'; // Import the styled components
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const images = [
  { id: '1', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739983201/hair1_rxaw1f.jpg' },
  { id: '2', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739983885/5cb95df4-1ed4-409f-90db-4d79e765e67c_ezgjx3.jpg' },
  { id: '3', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739983941/7a2a9645-fe86-4239-9c1f-1dc09f7c6ab3_lrrhjd.jpg' },
  { id: '4', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739983982/32bb537c-2f9c-440d-98f0-f4f6a5193c0a_zoyd5e.jpg' },
  { id: '5', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739984042/34f80929-63f4-4fc7-abfe-53d1a7230fca_b5ijuy.jpg' },
  { id: '6', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739984122/43d43eaf-f68c-4bf8-abc9-0b12226579a5_fydhy0.jpg' },
  { id: '7', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739984213/57bc4af0-b053-4337-afad-0be90e33e136_iw5pb0.jpg' },
  { id: '8', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739984255/a79f735f-dff9-4ccf-bf49-ed570bf945e4_zjcwjj.jpg' },
  { id: '9', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739985102/1b71b2dc-e5b3-4531-8c6b-8bdf8d793f13_wi8ylh.jpg' },
  { id: '10', url: 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739985196/b4a3259b-32c2-4da3-848c-a89df60f7741_t0pawe.jpg' },
];

const image1 = 'https://res.cloudinary.com/dxr9o0iqj/image/upload/v1739984581/211_irpzkd.png';

const FullImageView = () => {
  const navigate = useNavigate();

  return (
    <SC.PageContainer>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={() => navigate(-1)}  
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>

      {/* Main Featured Image */}
      <div style={{ margin: '1px', cursor: 'pointer' }} onClick={() => console.log('Image clicked')}>
          <img 
              src={image1}  
              alt="Gallery Image"
              style={{ width: '100%', height: '300px', borderRadius: '5px', objectFit: 'contain' }}  
          />
      </div>

      {/* Image Grid */}
      <SC.ImageGrid>
        {images.map((item) => (
          <SC.ImageCard key={item.id}>
            <SC.ImageGallery src={item.url} alt={`Gallery ${item.id}`} />
          </SC.ImageCard>
        ))}
      </SC.ImageGrid>
    </SC.PageContainer>
  );
};

export default FullImageView;