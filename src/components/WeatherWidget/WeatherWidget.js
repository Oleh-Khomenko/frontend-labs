import ReactWeather, { useOpenWeather } from 'react-open-weather';

const customStyles = {
  fontFamily:  'Helvetica, sans-serif',
  gradientStart:  '#0181C2',
  gradientMid:  '#04A7F9',
  gradientEnd:  '#4BC4F7',
  locationFontColor:  '#FFF',
  todayTempFontColor:  '#FFF',
  todayDateFontColor:  '#B5DEF4',
  todayRangeFontColor:  '#B5DEF4',
  todayDescFontColor:  '#B5DEF4',
  todayInfoFontColor:  '#B5DEF4',
  todayIconColor:  '#FFF',
  forecastBackgroundColor:  '#FFF',
  forecastSeparatorColor:  '#DDD',
  forecastDateColor:  '#777',
  forecastDescColor:  '#777',
  forecastRangeColor:  '#777',
  forecastIconColor:  '#4BC4F7',
};

export default function WeatherWidget() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '9b6bfed87629b456739a581e5cc77e52',
    lat: '50.447846',
    lon: '30.451625',
    lang: 'ua',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      theme={customStyles}
      lang="en"
      locationLabel="Київ"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
