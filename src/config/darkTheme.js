export const darkThemeOverrides = {
  'common': {
    duration: '0.2s',
    borderRadius: '6px',
    primaryColor: '#a78bfa',
    primaryColorHover: '#c4b5fd',
    primaryColorPressed: '#8b5cf6',
    baseColor: '#0f172a',
    textColor2: '#f1f5f9',
    textColor3: '#cbd5e1'
  },
  'InternalSelection': {
    textColor: '#f1f5f9',
    placeholderColor: '#cbd5e1'
  },
  'Pagination': {
    itemTextColor: '#fff',
    itemColorHover: 'rgba(255, 255, 255, 0.1)',
    itemColorPressed: 'rgba(255, 255, 255, 0.2)',
    itemColorActive: 'rgba(255, 255, 255, 0.2)',
    itemBorderRadius: '6px'
  },
  'Tag': {
    borderRadius: '6px'
  },
  'Input': {
    borderHover: '#c4b5fd',
    borderFocus: '#a78bfa'
  },
  'Card': {
    borderRadius: '8px',
    color: '#1e293b',
    colorModal: '#1e293b'
  },
  'Select': {
    peers: {
      InternalSelection: {
        textColor: '#f1f5f9',
        placeholderColor: '#cbd5e1',
        color: 'rgba(30, 41, 59, 0.9)',
        colorActive: 'rgba(30, 41, 59, 0.95)',
        border: '1px solid #334155',
        borderHover: '1px solid #a78bfa',
        borderActive: '1px solid #a78bfa',
        borderFocus: '1px solid #a78bfa'
      },
      InternalSelectMenu: {
        color: '#1e293b',
        optionTextColor: '#f1f5f9',
        optionColorHover: '#334155',
        optionColorActive: '#6d28d9',
        optionTextColorActive: '#c4b5fd'
      }
    }
  },
  'Button': {
    borderRadius: '6px',
    paddingMedium: '0 18px',
    heightMedium: '34px',
    textColorPrimary: '#ffffff',
    textColorHoverPrimary: '#ffffff',
    textColorQuaternary: '#f1f5f9',
    textColorQuaternaryHover: '#f1f5f9',
    textColorQuaternaryPressed: '#f1f5f9',
    colorQuaternary: 'transparent',
    colorQuaternaryHover: 'rgba(255, 255, 255, 0.1)',
    colorQuaternaryPressed: 'rgba(255, 255, 255, 0.15)'
  }
}
