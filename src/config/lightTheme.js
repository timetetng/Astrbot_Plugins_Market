export const lightThemeOverrides = {
  'common': {
    duration: '0.2s',
    borderRadius: '6px',
    primaryColor: '#10b981',
    primaryColorHover: '#34d399',
    primaryColorPressed: '#059669',
    baseColor: '#fff',
    textColor2: '#1e293b',
    textColor3: '#64748b'
  },
  'InternalSelection': {
    textColor: '#1e293b',
    placeholderColor: '#64748b'
  },
  'Pagination': {
    itemTextColor: '#fff',
    itemColorHover: 'rgba(255, 255, 255, 0.1)',
    itemColorPressed: 'rgba(255, 255, 255, 0.2)',
    itemColorActive: 'rgba(255, 255, 255, 0.2)',
    itemBorderRadius: '6px'
  },
  'Tag': {
    borderRadius: '6px',
    color: '#10b981',
    colorHover: '#059669',
    colorPressed: '#047857',
    textColor: '#ffffff'
  },
  'Input': {
    borderHover: '#34d399',
    borderFocus: '#10b981'
  },
  'Card': {
    borderRadius: '8px',
    color: '#ffffff',
    colorModal: '#ffffff'
  },
  'Select': {
    peers: {
      InternalSelection: {
        textColor: '#1e293b',
        placeholderColor: '#64748b',
        color: 'rgba(255, 255, 255, 0.9)',
        colorActive: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #e2e8f0',
        borderHover: '1px solid #10b981',
        borderActive: '1px solid #10b981',
        borderFocus: '1px solid #10b981'
      },
      InternalSelectMenu: {
        color: '#ffffff',
        optionTextColor: '#1e293b',
        optionColorHover: '#f0fdf4',
        optionColorActive: '#dcfce7',
        optionTextColorActive: '#059669'
      }
    }
  },
  'Button': {
    borderRadius: '6px',
    paddingMedium: '0 18px',
    heightMedium: '34px',
    textColorPrimary: '#ffffff',
    textColorHoverPrimary: '#ffffff',
    textColorQuaternary: '#1e293b',
    textColorQuaternaryHover: '#1e293b',
    textColorQuaternaryPressed: '#1e293b',
    colorQuaternary: 'transparent',
    colorQuaternaryHover: 'rgba(0, 0, 0, 0.05)',
    colorQuaternaryPressed: 'rgba(0, 0, 0, 0.1)'
  }
}
