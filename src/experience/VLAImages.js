import dirtyImage from '../media/dirtyImage.png'
import cleanImage from '../media/cleanImage.png'
import SED from '../media/SED.png'
import epoch1SED from '../media/epoch1SED.png'
import lightCurve from '../media/lightCurve.png'

const VLAImages = [
    {
        img: dirtyImage,
        title: 'Dirty image of blazar',
        caption: 'Dirty image of blazar, representing the raw observation data.'
    },
    {
        img: cleanImage,
        title: 'Clean image of blazar',
        caption: 'Clean image of blazar, representing the reduced observation data.'
    },
    {
        img: SED,
        title: 'Spectral Energy Distribution and light curve',
        caption: 'Spectral Energy Distribution and light curve of entire observation period.'
    },
    {
        img: epoch1SED,
        title: 'Resolved SED for first observation epoch',
        caption: 'Resolved SED for first observation epoch'
    },
    {
        img: lightCurve,
        title: 'Resolved light curve for second observation epoch',
        caption: 'Resolved light curve for second observation epoch',
    }, 
]
export default VLAImages