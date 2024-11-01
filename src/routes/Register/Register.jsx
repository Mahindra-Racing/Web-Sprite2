import React, { useState } from 'react';
import { Mail, Lock, User, Image, ChevronRight, ArrowRightCircle, Eye, EyeOff } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
    bannerImage: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        bannerImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSelectImage = (imageType, imageSrc) => {
    setFormData({
      ...formData,
      [imageType]: imageSrc,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar se todos os campos estão preenchidos
    const { name, email, password, confirmPassword, profileImage, bannerImage } = formData;
    if (!name || !email || !password || !confirmPassword || !profileImage || !bannerImage) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Envia os dados para a API sem aguardar a resposta
    fetch('https://bd-web-ruddy.vercel.app/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((error) => console.error('Erro ao registrar conta:', error));
  
    // Redireciona para a página de login imediatamente
    alert('Account successfully registered!');
    window.location.href = '/Login';
  };
  
  

  return (
    <div className="register-container">
      {step === 1 && (
        <div className="register-step1-container">
          <div className="register-left-step1">
            <h1 className="register-title-step1">Synthica</h1>
            <p className="register-subtitle-step1">Join the Synthica community and register now!</p>
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="register-form-step1">
              <div className="register-formInputs-step1">
                <div className="register-input-container">
                  <label className="register-label-step1">
                    <User className="iconREG" />
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="register-input-step1"
                    required
                  />
                </div>

                <div className="register-input-container">
                  <label className="register-label-step1">
                    <Mail className="iconREG" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="register-input-step1"
                    required
                  />
                </div>

                <div className="register-input-container">
                  <label className="register-label-step1">
                    <Lock className="iconREG" />
                    Password
                  </label>
                  <div className="password-container-step1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="register-input-step1"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggleButton-step1"
                    >
                      {showPassword ? <EyeOff className="iconREG" /> : <Eye className="iconREG" />}
                    </button>
                  </div>
                </div>

                <div className="register-input-container">
                  <label className="register-label-step1">
                    <Lock className="iconREG" />
                    Confirm Password
                  </label>
                  <div className="password-container-step1">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="register-input-step1"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="password-toggleButton-step1"
                    >
                      {showConfirmPassword ? <EyeOff className="iconREG" /> : <Eye className="iconREG" />}
                    </button>
                  </div>
                </div>

                <button className="register-button-step1">
                  <ArrowRightCircle className="iconREG" />
                  Next
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://e-formula.news/files/e-formel/uploads/_NEWS/2023/11%20November/Mercedes-FE-Car-from-behind.jpg"
            alt="Registration"
            className="register-image-step1"
          />
        </div>
      )}

      {step === 2 && (
        <div className="register-step2-container">
          <div className="register-step2">
            <h2 className="register-subtitle-step2">Choose Your Images</h2>
            <form onSubmit={handleSubmit} className="register-form-step2">
              <h3 className="register-titleH3-step2"><Image className="iconREG" /> Profile Image</h3>
              <div className="image-options-step2">
                {[
                  'https://preview.redd.it/ot-new-logo-of-formula-e-with-previous-versions-in-the-last-v0-vqqgra64jn2a1.jpg?width=1023&format=pjpg&auto=webp&s=efac52d4930abe6a5561958a3b8243d6956838a9',
                  'https://yt3.googleusercontent.com/A6dMonzS07Y6IKhwMHayDsxyZQTMp6EfLNnwSb0_-fxqPludKq97vXlDLLTdCKaMNde7VEiycg=s900-c-k-c0x00ffffff-no-rj',
                  'https://static.vecteezy.com/ti/vetor-gratis/p1/20500584-mclaren-marca-simbolo-logotipo-preto-projeto-britanico-carro-automovel-ilustracao-com-laranja-fundo-gratis-vetor.jpg',
                  'https://logodownload.org/wp-content/uploads/2014/09/nissan-logo-7.png',
                  'https://wallpapers.com/images/hd/xbox-360-profile-pictures-5tsfsz64h3jkz31g.jpg',
                  'https://preview.redd.it/xbox-360-default-gamerpics-my-beloved-multi-image-post-v0-5bgu9m1iodmb1.png?width=640&crop=smart&auto=webp&s=8601c025a54ff14bdcdfc471cab5c2c9d158b8fb',
                  'https://wallpapers.com/images/hd/xbox-360-profile-pictures-e2bpy4ip6cmbx6cr.jpg',
                  
                ].map((src, index) => (
                  <div key={index} className="image-optionContainer-step2">
                    <img
                      src={src}
                      alt={`Profile Option ${index + 1}`}
                      className={`image-option-step2 ${formData.profileImage === src ? 'selected' : ''}`}
                      onClick={() => handleSelectImage('profileImage', src)}
                    />
                  </div>
                ))}
              </div>
              <p className="upload-text">Or upload your own image:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="register-fileInput-step2"
              />

              <h3 className="register-titleH3-step2"><Image className="iconREG" /> Banner Image</h3>
              <div className="banner-image-options-step2">
                {[
                  'https://png.pngtree.com/thumb_back/fh260/background/20210518/pngtree-gradient-blue-background-image_717005.jpg',
                  'https://st.depositphotos.com/23505610/56521/i/450/depositphotos_565219514-stock-photo-purple-blue-bright-abstract-high.jpg',
                  'https://img.freepik.com/vetores-gratis/degrade-de-fundo-azul_23-2149333533.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdEbwNzoqEhUzvpiDge9svuFkb0XohHNq-A&usqp=CAU',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s',
                  'https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-simple-green-gradient-geometric-beautiful-gradient-image_11795.jpg',
                  'https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-estudio-gradiente-abstrato-preto-e-branco_1258-53723.jpg',
                  
                ].map((src, index) => (
                  <div key={index} className="banner-image-optionContainer-step2">
                    <img
                      src={src}
                      alt={`Banner Option ${index + 1}`}
                      className={`banner-image-option-step2 ${formData.bannerImage === src ? 'selected' : ''}`}
                      onClick={() => handleSelectImage('bannerImage', src)}
                    />
                  </div>
                ))}
              </div>
              <p className="upload-text">Or upload your own image:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleBannerChange}
                className="register-fileInput-step2"
              />

            

              <button type="submit" className="register-button-step2">
                <ChevronRight className="iconREG" /> Register
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Register;
