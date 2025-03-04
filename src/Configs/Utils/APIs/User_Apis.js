import { components } from 'react-select'

export const handleInputFocus = (e) => {
  e.target.parentNode.classList.add('inputFocus');
}

export const handleInputBlur = (e) => {
  e.target.parentNode.classList.remove('inputFocus');
}

export const handleNumKeyDown = (e) => {
  ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
}

export const formatWeekDay = (date) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (date) {
    return daysOfWeek[date?.getDay()];
  } else {
    return null;
  }
};

export const handleStartDateChange = (date) => {
  if (date) {
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  }
};

export const themeSelect = (theme) => (
  { ...theme, borderRadius: 10, colors: { ...theme.colors, primary25: '#256d360c', primary: '#256D3626', }, }
);

export const selectStyle = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#256D36' : '#256D36',
    fontWeight: state.isSelected ? 'bold' : 'normal',
  }),
  control: (provided, state) => ({
    ...provided,
    border: `1px solid ${state.isFocused ? '#e8e8e8' : provided.borderColor}`,
  }),
};

export const CustomSelectContainer = ({ children, ...props }) => (
  <div className='d-flex align-items-center '>
    <i className={props.selectProps.customClassName || ''} style={{ padding: "0px 10px" }} />
    {children}
  </div>
);

export const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>
    <CustomSelectContainer {...props}>{children}</CustomSelectContainer>
  </components.ValueContainer >
);

export const buildSearchUrl = (baseRoute, params) => {
  let url = baseRoute;
  let hasPreviousNonNullValue = false;

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      const separator = hasPreviousNonNullValue ? '&' : '?';
      url += `${separator}${key}=${value}`;
      hasPreviousNonNullValue = true;
    }
  });

  return url;
};

export const getYoutubeId = (url) => {
  // var regExp = /^.*(youtube.com\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var regExp = /^.*(youtube.com\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  var match = url?.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return 'error';
  }
}

export const cancelApiRequest = (controllers) => {
  for (const controller of controllers) {
    controller.abort();
  }
}