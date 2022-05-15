/**
 * @export Maps Weather maps external widget
 * @param {*} { coords }
 * @return {*} Iframe showing the weather maps
 */
export default function Maps ({ coords }) {
  return (
    <iframe
      title='maps'
      src={`https://embed.windy.com/embed2.html?lat=${coords.lat}&lon=${coords.lon}` +
      '&zoom=9&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=&calendar=now' +
      '&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'}
      width='100%' height='700px'
    />
  )
}
