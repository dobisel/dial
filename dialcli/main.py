import os
import sys

from easycli import Root, Argument


EXIT_SUCCESS = 0
EXIT_FAILURE = 1


class Dial(Root):
    __help__ = 'ASCII diagram language interpreter'
    __arguments__ = [
        Argument('-V', '--version', action='store_true'),
        Argument(
            '-C', '--change-directory',
            default='.',
            help='Change the current working directory before executing, '
                 'default: ".".'
        ),
        Argument(
            'file',
            nargs='*',
            help='File containing dial source code. if not given, the '
                 'standard input will be used.'
        ),
    ]

    def __call__(self, args):
        import dial

        if args.version:
            print(dial.__version__)
            return

        outfile = sys.stdout

        def render(infile):
            dial.render(infile, outfile)

        if args.change_directory != '.':
            os.chdir(args.change_directory)

        try:
            if not args.file:
                render(sys.stdin)
            else:
                for index, filename in enumerate(args.file):
                    if index:
                        print(file=outfile)

                    with open(filename) as f:
                        render(f)

            return EXIT_SUCCESS
        except dial.InterpreterError as ex:
            print(ex, file=sys.stderr)
            return EXIT_FAILURE
