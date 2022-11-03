import { useEffect, useState } from "react";
import IconX from '../../assets/images/IconX.svg'

const CloseIcon = () => (
    <img src={IconX} />
)

const Dropdown = ({ placeHolder, options, isMulti, onChange, values }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    let newValue;
    isMulti
      ? newValue = [...values]
      : newValue = values[0]
    setSelectedValue(newValue);
    onChange(newValue);
  }, [JSON.stringify(values)])

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    if (isMulti) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option, index) => (
            <div key={index} className="dropdown-tag-item">
              <p className="dropdown-tag-item-text">{option}</p>
              <p onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close"><CloseIcon /></p>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue;
  };

  const removeOption = (option) => {
    return selectedValue.filter((o) => o !== option);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o === option) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o === option).length > 0;
    }
    if (!selectedValue) {
      return false;
    }
    return selectedValue === option;
  }

  return (

    <div>
      <div className="dropdown-container">
        <div onClick={handleInputClick} className="dropdown-input">
          <div className="dropdown-selected-value">{getDisplay()}</div>
        </div>
        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option, index) => (
              <div
                onClick={() => onItemClick(option)}
                key={index}
                className={`dropdown-item ${isSelected(option) && "selected"}`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

  );
};

export default Dropdown;