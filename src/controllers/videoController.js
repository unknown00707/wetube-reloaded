export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
export const search = (req, res) => res.send('Search');

export const see = (req, res) => res.render('Watch');
export const edit = (req, res) => res.render('Edit');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
