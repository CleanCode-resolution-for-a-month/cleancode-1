import { Message } from 'discord.js';
import api from '../api';
import Command from '../command';
import { config } from '../constants';
import utils from '../utils';

class MusicPlayer {
  musicRequestQueue = {};
  playlist = [];

  run(message: Message) {
    const command = new Command(message);

    if (command.input === 'm') {
      this.runMusicPlayer(command);
    }
  }

  async runMusicPlayer(command: Command) {
    try {
      const keyword = command.message.content.replace(config.PREFIX + 'm ', '');
      const result = await this.getSearchResult(keyword);
      command.message.channel.send(result);
    } catch (error) {
      //TODO: 에러 처리 추가
    }
  }

  async getSearchResult(keyword: string) {
    if (utils.isURL(keyword)) {
      await this.searchByURL(keyword);
    } else {
      await this.searchByWord(keyword);
    }
  }

  async searchByURL(url: string) {
    //TODO: URL로 영상 검색
  }

  async searchByWord(keyword: string) {
    const videos = await this.getVideos(keyword);

    const result = videos.reduce((acc, video, index) => {
      return acc + `[${index + 1}] ${video.info.title}\n`;
    }, '');
    return result;
  }

  async getVideos(keyword: string) {
    const response = await api.youtube.search(keyword);
    const items = response.data.items ?? [];
    const videos = items.map((data) => ({
      id: data.id,
      protocol: 'youtube',
      info: {
        title: data.snippet?.title,
        thumbnails: data.snippet?.thumbnails,
        description: data.snippet?.description,
        publish_date: data.snippet?.publishedAt,
      },
      source: data,
    }));

    return videos;
  }
}

export default MusicPlayer;
