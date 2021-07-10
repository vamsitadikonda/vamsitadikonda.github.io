(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    nRki: function (e, t, a) {
      'use strict';
      a.r(t);
      var n,
        l,
        r,
        i,
        c = a('MUpH'),
        o = a('q1tI'),
        s = a.n(o),
        m = a('TJpk'),
        d = a('nLfd'),
        h = a('20nU'),
        p = a('Kvkj'),
        f = a('g67X'),
        u = a('vOnD'),
        b = a('InJ6'),
        g = b.h.colors,
        E = b.h.fonts,
        k = b.h.fontSizes,
        x = Object(u.c)(b.d).withConfig({
          displayName: 'archive__StyledMainContainer',
          componentId: 'sc-zwrrxk-0',
        })(['']),
        w = u.c.div.withConfig({
          displayName: 'archive__StyledTableContainer',
          componentId: 'sc-zwrrxk-1',
        })(
          ['margin:100px -20px;', ';'],
          b.f.tablet(n || (n = Object(c.a)(['\n    margin: 100px -10px;\n  ']))),
        ),
        v = u.c.table.withConfig({
          displayName: 'archive__StyledTable',
          componentId: 'sc-zwrrxk-2',
        })(
          [
            'width:100%;border-collapse:collapse;.hide-on-mobile{',
            ';}tbody tr{transition:',
            ';&:hover,&:focus{background-color:',
            ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
            ';}th{text-align:left;}td{&.year{width:10%;',
            ';}&.title{padding-top:15px;color:',
            ';font-size:',
            ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
            ';}&.tech{font-size:',
            ';font-family:',
            ';.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{',
            ';}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
          ],
          b.f.tablet(l || (l = Object(c.a)(['\n      display: none;\n    ']))),
          b.h.transition,
          g.lightNavy,
          b.f.tablet(r || (r = Object(c.a)(['\n      padding: 10px;\n    ']))),
          b.f.tablet(i || (i = Object(c.a)(['\n        font-size: ', ';\n      '])), k.sm),
          g.lightestSlate,
          k.xl,
          k.lg,
          k.xs,
          E.SFMono,
          b.g.flexCenter,
        );
      t.default = function (e) {
        var t = e.location,
          a = e.data.allMarkdownRemark.edges,
          n = Object(o.useRef)(null),
          l = Object(o.useRef)(null),
          r = Object(o.useRef)([]);
        return (
          Object(o.useEffect)(function () {
            d.a.reveal(n.current, Object(h.srConfig)()),
              d.a.reveal(l.current, Object(h.srConfig)()),
              r.current.forEach(function (e, t) {
                return d.a.reveal(e, Object(h.srConfig)(10 * t));
              });
          }, []),
          s.a.createElement(
            p.i,
            { location: t },
            s.a.createElement(
              m.Helmet,
              null,
              s.a.createElement('title', null, 'Archive | Chandrika Deb'),
              s.a.createElement('link', {
                rel: 'canonical',
                href: 'https://chandrikadeb7.github.io/archive',
              }),
            ),
            s.a.createElement(
              x,
              null,
              s.a.createElement(
                'header',
                { ref: n },
                s.a.createElement('h1', { className: 'big-title' }, 'Archive'),
                s.a.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              s.a.createElement(
                w,
                { ref: l },
                s.a.createElement(
                  v,
                  null,
                  s.a.createElement(
                    'thead',
                    null,
                    s.a.createElement(
                      'tr',
                      null,
                      s.a.createElement('th', null, 'Year'),
                      s.a.createElement('th', null, 'Title'),
                      s.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      s.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      s.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  s.a.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function (e, t) {
                        var a = e.node.frontmatter,
                          n = a.date,
                          l = a.github,
                          i = a.external,
                          c = a.title,
                          o = a.tech,
                          m = a.company;
                        return s.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function (e) {
                              return (r.current[t] = e);
                            },
                          },
                          s.a.createElement(
                            'td',
                            { className: 'overline year' },
                            '' + new Date(n).getFullYear(),
                          ),
                          s.a.createElement('td', { className: 'title' }, c),
                          s.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            m
                              ? s.a.createElement('span', null, m)
                              : s.a.createElement('span', null, '—'),
                          ),
                          s.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            o.length > 0 &&
                              o.map(function (e, t) {
                                return s.a.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== o.length - 1 &&
                                    s.a.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          s.a.createElement(
                            'td',
                            { className: 'links' },
                            s.a.createElement(
                              'span',
                              null,
                              i &&
                                s.a.createElement(
                                  'a',
                                  {
                                    href: i,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  s.a.createElement(f.a, { name: 'External' }),
                                ),
                              l &&
                                s.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  s.a.createElement(f.a, { name: 'GitHub' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-60d15419aba444dcd31e.js.map