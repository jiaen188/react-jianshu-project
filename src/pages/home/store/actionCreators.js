import axios from 'axios';
import * as constants from './constants';

const changeHomeData = ({ topicList, articleList, recommendList }) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList,
  articleList,
  recommendList
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
      const action = changeHomeData(res.data.data)
      dispatch(action);
		});
	}
}