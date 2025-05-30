export const trending = (req, res) => {
    const videos = [
        {
            title: 'asdf',
            rating: 5,
            comments: 2,
            createdAt: '2min age',
            views: 5,
            id: 1,
        },
        {
            title: 'asdfasdf',
            rating: 53,
            comments: 23,
            createdAt: '2min age',
            views: 53,
            id: 2,
        },
        {
            title: 'asdfasdfasdf',
            rating: 50,
            comments: 20,
            createdAt: '2min age',
            views: 50,
            id: 3,
        },
    ];
    return res.render('home', { pageTitle: 'Home', videos });
};
export const search = (req, res) => res.send('Search');

export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render('Watch', { pageTitle: `Wathcing: ${video.title}`, video });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render('Edit', { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render('upload');
};
export const postUpload = (req, res) => {
    return res.redirect('/');
};
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
