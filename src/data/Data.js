const data = [
    {
        id: 1,
        name: 'Bầu Trời Rực Đỏ',
        img: 'https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1634659035',
        parts: 14
    },
    {
        id: 2,
        name: 'Đẳng Cấp Thượng Lưu',
        img: 'https://i0.wp.com/image.motphim.net/poster/dang-cap-thuong-luu-9370.jpg?1634658563',
        parts: 13
    },
    {
        id: 3,
        name: 'Sáng Như Trăng Trong Mây',
        img: 'https://i0.wp.com/image.motphim.net/poster/sang-nhu-trang-trong-may-9470.jpg?1634657717',
        parts: 22
    },
    {
        id: 4,
        name: 'Luyến Mộ',
        img: 'https://i0.wp.com/image.motphim.net/poster/luyen-mo-9496.jpg?1634655488',
        parts: 14
    },
    {
        id: 5,
        name: 'Quốc Tử Giám Có Một Nữ Đệ Tử',
        img: 'https://i0.wp.com/image.motphim.net/poster/quoc-tu-giam-co-mot-nu-de-tu-7264.jpg?1634647573',
        parts: 30
    },
    {
        id: 6,
        name: 'Mộ Nam Chi',
        img: 'https://i0.wp.com/image.motphim.net/poster/mo-nam-chi-9518.jpg?1634646459',
        parts: 12
    },
    {
        id: 7,
        name: 'Vừa Lúc Em Tỏa Sáng',
        img: 'https://i0.wp.com/image.motphim.net/poster/vua-luc-em-toa-sang-9494.jpg?1634619095',
        parts: 14
    },
    {
        id: 8,
        name: 'Điệu Cha-Cha-Cha Làng Biển',
        img: 'https://i0.wp.com/image.motphim.net/poster/dieu-cha-cha-cha-lang-bien-9293.jpg?1634544880',
        parts: 16
    },
    {
        id: 9,
        name: 'Gửi Thời Thanh Xuân Ấm Áp Của Chúng Tôi (Bản Thái)',
        img: 'https://i0.wp.com/image.motphim.net/poster/gui-thoi-thanh-xuan-am-ap-cua-chung-ta-ban-thai-2111.jpg?1634472940g',
        parts: 20
    },
    {
        id: 10,
        name: 'Mặt Trời Đen',
        img: 'https://i0.wp.com/image.motphim.net/poster/mat-troi-den-8750.jpg?1634400406',
        parts: 10
    },
    {
        id: 11,
        name: 'Nữ Thanh Tra Tài Ba',
        img: 'https://i0.wp.com/image.motphim.net/poster/nu-thanh-tra-tai-ba-9387.jpg?1634399152',
        parts: 10
    },
    {
        id: 12,
        name: 'Chỉ Là Quan Hệ Hôn Nhân',
        img: 'https://i0.wp.com/image.motphim.net/poster/chi-la-quan-he-hon-nhan-9484.jpg?1634386870',
        parts: 14
    },
    {
        id: 13,
        name: 'Biệt Đội Titans (Phần 3)',
        img: 'https://i0.wp.com/image.motphim.net/poster/biet-doi-titans-phan-3-9161.jpg?1634367096',
        parts: 12
    },
    {
        id: 14,
        name: 'Các Tế Bào Của Yumi',
        img: 'https://i0.wp.com/image.motphim.net/poster/cac-te-bao-cua-yumi-5772.jpg?1634367095',
        parts: 10
    },
    {
        id: 15,
        name: 'My Name',
        img: 'https://i0.wp.com/image.motphim.net/poster/my-name-9452.jpg?1634291220',
        parts: 8
    },
    {
        id: 16,
        name: 'Cố Hương',
        img: 'https://i0.wp.com/image.motphim.net/poster/co-huong-6777.jpg?1634276280',
        parts: 8
    },
    {
        id: 17,
        name: 'Quân Cửu Linh',
        img: 'https://i0.wp.com/image.motphim.net/poster/quan-cuu-linh-9372.jpg?1633963243',
        parts: 40
    },
    {
        id: 18,
        name: 'Đảo Hải Tặc',
        img: 'https://i0.wp.com/image.motphim.net/poster/dao-hai-tac-718.jpg?1633855571',
        parts: 995
    },
    {
        id: 19,
        name: 'Này! Đại Sự Của Cậu Thật Kỳ Diệu',
        img: 'https://i0.wp.com/image.motphim.net/poster/nay-dai-su-cua-cau-that-ky-dieu-9456.jpg?1633855191',
        parts: 24
    },
    {
        id: 20,
        name: 'Huynh Thân Yêu Của Ta',
        img: 'https://i0.wp.com/image.motphim.net/poster/huynh-than-yeu-cua-ta-705.jpg?1633699000',
        parts: 28
    },
];
export const animeFim =
    [
        {
            id: 1,
            name: 'Lưỡng bất nghi',
            img: 'https://i0.wp.com/image.motphim.net/poster/luong-bat-nghi-8909.jpg?1634724376',
            parts: 21
        },
        {
            id: 2,
            name: 'Thiếu niên ca hành (Phần 2) 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/thieu-nien-ca-hanh-phan-2-9214.jpg?1634707203',
            parts: 14
        },
        {
            id: 3,
            name: 'Thanh gương diệt quỷ: Chuyến tàu vô tận (Bản TV) 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/thanh-guom-diet-quy-chuyen-tau-vo-tan-ban-tv-9502.jpg?1634558720',
            parts: 2
        },
        {
            id: 4,
            name: 'Manh thê thực thần (Phần 2) 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/manh-the-thuc-than-phan-2-9491.jpg?1634392543',
            parts: 3
        },
        {
            id: 5,
            name: 'Đấu la đại lục 2018',
            img: 'https://i0.wp.com/image.motphim.net/poster/dau-la-dai-luc-4084.jpg?1634370401',
            parts: 178
        },
        {
            id: 6,
            name: 'Ma đạo tổ sử 3 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/ma-dao-to-su-3-9378.jpg?1634367071',
            parts: 12
        },
        {
            id: 7,
            name: 'Liệt hỏa kiêu sầu 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/liet-hoa-kieu-sau-9492.jpg?1634291477',
            parts: 3
        },
        {
            id: 8,
            name: 'Thế giới hoàn mỹ 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/the-gioi-hoan-my-9380.jpg?1634272474',
            parts: 28
        },
    ];
export const favoriteFim =
    [
        {
            id: 1,
            name: 'khi em mỉm cười rất đẹp 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/khi-em-mim-cuoi-rat-dep-9086.jpg?1626360044',
            parts: 'Full 31/31 Vietsub'
        },
        {
            id: 2,
            name: 'trò chơi con mực 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/tro-choi-con-muc-9383.jpg?1632756418',
            parts: 'Full 9/9 Vietsub+TM'
        },
        {
            id: 3,
            name: 'em là niềm cao hãnh của anh 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/em-la-niem-kieu-hanh-cua-anh-8908.jpg?1629565264',
            parts: 'Full 32/32 Vietsub+TM'
        },
        {
            id: 4,
            name: 'bí mật nơi gốc tối 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/bi-mat-noi-goc-toi-9263.jpg?1630988475',
            parts: 'Full 24/24 Vietsub+TM'
        },
        {
            id: 5,
            name: 'hạ tiên sinh lưu luyến không quên 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/ha-tien-sinh-luu-luyen-khong-quen-9145.jpg?1628051378',
            parts: 'Full 24/24 Vietsub'
        },
        {
            id: 6,
            name: 'vincenzo 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/vincenzo-8706.jpg?1629701825',
            parts: 'Full 20/20 Vietsub+TM'
        },
        {
            id: 7,
            name: 'Thiên cổ quyết trần 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/thien-co-quyet-tran-9065.jpg?1626613081',
            parts: 'Full 49/49 Vietsub'
        },
        {
            id: 8,
            name: 'dẫu biết 2021',
            img: 'https://i0.wp.com/image.motphim.net/poster/dau-biet-9078.jpg?1629868830',
            parts: 'Full 10/10 Vietsub+TM'
        },
    ];
export default data;