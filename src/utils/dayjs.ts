import dayjs from 'dayjs'

dayjs.extend(require('dayjs/plugin/relativeTime'))
dayjs.extend(require('dayjs/plugin/utc'))

export default dayjs
