import React, {Component} from 'react'
import About from './about/About'
import ViewImg from './viewImg/ViewImg'
import Main from './main/Main'

// about
import openclass from '../../assets/images/open-class.png'
import classroom from '../../assets/images/cloud-classroom.png'
import mooc from '../../assets/images/university-mooc.png'

// viewimg
import viewimg from '../../assets/images/aboutImg.jpg'

// main - video
import videologo from '../../assets/images/calss-info.jpg'

let data = {
    about: {
        list: [
            {
                logo: openclass,
                title: '网易公开课',
                text: '推出国内外名校公开课，涉及广泛的学科，名校老师认真讲解深度剖析，网易视频公开课频道搭建起强有力的网络视频教学平台。',
                src: 'https://open.163.com/',
            },
            {
                logo: classroom,
                title: '云课堂',
                text: '网易旗下大型在线学习平台，该平台面向学习者提供海量免费、优质课程,创新的个性化学习体验，自由开放的交流互动环境。',
                src: 'http://study.163.com/'
            },
            {
                logo: mooc,
                title: '中国大学MOOC',
                text: '是爱课程网携手云课堂打造的在线学习平台，每一个有提升愿望的人,都可以在这里学习中国最好的大学课程，学完还能获得认证证书。',
                src: 'http://www.icourse163.org/',
            }
        ]
    },
    view: {
        img: viewimg
    },
    main: {
        sidebarCards: {
            video: {
                title: '机构介绍',
                text: '观看下面的视频来了解吧：',
                logo: videologo,
                src: 'http://mov.bn.netease.com/open-movie/nos/mp4/2014/12/30/SADQ86F5S_shd.mp4'
            },
            randomList: {
                title: '最热排行',
                url: 'http://study.163.com/webDev/hotcouresByCategory.htm'
            }
        },
        interactiveCaards: {
            tabs: [{
                name: '产品设计',
                type: 10
            }, {
                name: '编程语言',
                type: 20
            }],
            url: 'http://study.163.com/webDev/couresByCategory.htm'
        }
    }
}

export default class Content extends Component {
    render(){
        return(
            <div>
                <About data={data.about} />
                <ViewImg data={data.view} />
                <Main data={data.main} />
            </div>
        )
    }
}