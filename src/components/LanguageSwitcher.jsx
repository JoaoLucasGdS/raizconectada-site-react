import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './css/LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };
  
  const availableLanguages = (i18n.options.supportedLngs || [])
    .filter(lng => lng !== 'cimode' && lng !== i18n.language); 

  return (
    <div className="language-switcher-wrapper" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <i className="bi bi-translate fs-3" />
        <span>{i18n.language.split('-')[0].toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="language-options" role="menu">
          {availableLanguages.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="language-option-button"
              role="menuitem"
            >
              {lng === 'pt-BR' ? '🇧🇷 Português' : '🇺🇸 English'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;