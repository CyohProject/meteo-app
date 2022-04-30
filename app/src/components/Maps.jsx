export default function Maps () {
  const src = 'https://embed.windy.com/embed2.html?lat=41&lon=41&zoom=9&level=surface&overlay=temp&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'

  return (
    <iframe
      title='maps'
      src={src}
      width='100%' height='700px'
    />
  )
}
