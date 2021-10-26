
import Data, { animeFim, favoriteFim } from '../data/Data.js'
import ComingSoon, { trendingDays } from '../data/ComingSoon.js'
import ListFim from '../Component/ListFim.js'
import { ComingSongList, TrendingList } from '../Component/ListFim_2.js'


export default function Main() {

    return (
        <div className="main container">
            <div className="main__left">
                <div className="main__heading ">
                    <div className="main__heading-title">
                        <h2>Phim bộ mới cập nhật</h2>
                        <span>Phim lẻ mới cập nhật</span>
                        <span>Phim đã hoàn thành</span>
                    </div>
                    <div className="main__item">
                        {Data.map((item) => {
                            return (
                                <ListFim
                                    key={item.id}
                                    items={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="main__heading ">
                    <div className="main__heading-title">
                        <h2>Phim hoạt hình</h2>
                    </div>
                    <div className="main__item">
                        {animeFim.map((item) => {
                            return (
                                <ListFim
                                    key={item.id}
                                    items={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="main__heading ">
                    <div className="main__heading-title">
                        <h2>Được yêu thích</h2>
                    </div>
                    <div className="main__item">
                        {favoriteFim.map((item) => {
                            return (
                                <ListFim
                                    key={item.id}
                                    items={item}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="main__right">
                <div className="main__heading-title title-right">
                    <h2 className="heading-right">Phim Sắp Chiếu</h2>
                </div>
                {ComingSoon.map((item) => {
                    return (
                        <ComingSongList
                            key={item.id}
                            items={item}
                        />
                    )
                })}
                <div className="main__heading-title ">
                    <h2 className="title-right">Trending</h2>
                </div>
                <div className="main__trending">
                    <span className="main__trending-options active">Ngày</span>
                    <span className="main__trending-options">Tuần</span>
                    <span className="main__trending-options">Tháng</span>
                </div>
                {trendingDays.map((item) => {
                    return (
                        <TrendingList
                            key={item.id}
                            items={item}
                        />
                    )
                })}
                <div className="main__heading-title title-right">
                    <h2 className="heading-right">Từ khóa nổi bật</h2>
                </div>
            </div>
        </div>
    )

}