import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './css/LanguageSwitcher.css';

// An object to map language codes to their native names
const languageNames = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español',
  'ja': '日本語',
};

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

  // Get the native name of the current language, or default to the code
  const currentLanguageName = languageNames[i18n.language] || i18n.language;

  return (
    <div className="language-switcher-wrapper" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <i className="bi bi-translate fs-3" />
        <span>{currentLanguageName}</span>
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
              <i className="bi bi-translate" />
              <span>{languageNames[lng] || lng}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;