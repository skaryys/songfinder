README file for frontend developers
- explains basic approaches for style structuring and used components also shows list of resources
- explains used folder structure - rules where should be given kind of block
- states naming rules for each item of structure, which helps to unify code across the projects and developers

Basic approach:

On each project can be applied process of division bigger structures such as pages into smaller and smaller components.
It important to maintain components reusable and independent on the elements they are nested in. There are quite few
approaches, which specify the main idea of definition and division of components. Our base structure is based on SMACSS,
Pattern Lab's and ITCSS approaches, all based on BEM but with some adjustments. Below links explain these approaches.

https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving
https://smacss.com/book/categorizing
https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

Main idea is to define tree categories od reusable components, based on the number of HTML tags, they are represented by.
These components are then grouped into templates and pages. Difference between template and page is, that template can
define basic styles of more pages, if there are some with the same basis structure.

In addition to maintain consistent workflow across projects, base section of folder structure defines some always to use
styles for normalising viewport of different browsers and resets of default styles of widely used tags. All explains next section.

Folder structure explanation:

```
- assets - styles --- base --- vendor (external files)
         |        |        |          |
         |        |        |          --- less - (optional) folder, contains external plugins of libraries wrote in less
         |        |        |          |
         |        |        |          --- normalize.css - external library, makes browsers render all elements more consistently and in line with modern standards
         |        |        |          |
         |        |        |          --- grid.sass - library made by Appio, expands basic bootstrap grid by one more breakpoint for fullHD and higher resolutions (doc included in comments)
         |        |        |
         |        |        --- settings (includes all preprocessor based features/variables)
         |        |        |            |
         |        |        |            --- breakpoints.sass - variables defines breaikpoint used in media queries - based on vendor/grid.sass
         |        |        |            |
         |        |        |            --- colors.sass - variables defines colors used in project
         |        |        |            |
         |        |        |            --- fonts.sass - fontfaces and imports of google fonts, variables defines used fonts with fallbacks, used font-weights etc.
         |        |        |
         |        |        --- tools --- mixins.sass - all mixins used in projects
         |        |        |         |
         |        |        |         --- animations.sass - (optional) css animations (created via keyframes)
         |        |        |
         |        |        --- generic ---- normalize.sass - (optional) extension of vendor/normalize.css
         |        |                    |
         |        |                     -- resets.sass - resets of default browser defined styles of custom used HTML elements
         |        |                    |
         |        |                     -- utils.sass - helper classes, SUIT CSS helper classes included - read comments in file before starting the project to get needed info about included helpers
         |        |                                   - Naming style - all classes starts with u-* prefix ( .u-align-left )
         |        |
         |        |
         |        --- components --- atoms - atomic components such as buttons, input etc ( def. by 1-3 HTML tags) - use a-* prefix
         |        |              |
         |        |              --- molecules - small reusable parts such as product-boxes, usually few of them on one line (def. by 4-10 HTML tags) - use m-* prefix
         |        |              |
         |        |              --- organisms - bigger, but still reusable blocks, such as last news, usually more lines of molecules (def. by more than 10 HTML tags) -  - use o-* prefix
         |        |
         |        --- sections --- templates - group components into desired viewport, reusable on more pages - use t-* prefix
         |        |            |
         |        |            --- pages - definition of one page only styles - use p-* prefix
         |        |
         |        --- main.sass - imports of all .sass files, order matters, note comments
         |
         - js --- vendor - external plugins/libraries/whatsoever
              |
              --- _main.js - your own javascripts - !! all selector classes/ids use prefix js-* !!
```

Naming Rules:

Naming rules are stated in folder structure definition. Here is just overview already mentioned rules:

- components has to have prefix a-*, m-* or o-* based on their size
- sections has to have prefix t-* or p-*
- other used prefixes are u-* for utilities and helper classes and js-* for all classes and ids user as javascript selectors

to avoid of unnecessary long class names - always use nesting components into templates / pages !!
( atoms -> molecules -> organisms -> templates -> pages )
smaller section can never contain definition of bigger one !

all of this is on our wiki:

https://info.appio.cz/node/58
