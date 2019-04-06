import axios from 'axios';

const KEY='AIzaSyAnfJ49tkog7eUIJ-o7ff_0pFHSj1-nzhc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})