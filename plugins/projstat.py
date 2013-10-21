# -*- coding: utf-8 -*-

# Copyright © 2012-2013 Chris Warrick, Roberto Alsina and others.

# Permission is hereby granted, free of charge, to any
# person obtaining a copy of this software and associated
# documentation files (the "Software"), to deal in the
# Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the
# Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice
# shall be included in all copies or substantial portions of
# the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
# KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
# WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
# PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
# OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
# OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
# SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import re

from docutils import nodes, utils
from docutils.parsers.rst import roles

from nikola.plugin_categories import RestExtension


class Plugin(RestExtension):

    name = "rest_projstat"

    def set_site(self, site):
        self.site = site
        roles.register_local_role('projstat', projstat_role)

        return super(Plugin, self).set_site(site)

# TODO: pep_role and rfc_role are similar enough that they
# should be a generic function called via partial

def projstat_role(name, rawtext, desc, lineno, inliner, options={}, content=[]):
    """projstat role"""
    if desc == '0':
        out = '<span class="label label-inverse">Draft</span>'
    elif desc == '1':
        out = '<span class="label label-important">Work in Progress</span>'
    elif desc == '2':
        out = '<span class="label label-warning">Work in Progress</span>'
    elif desc == '3':
        out = '<span class="label label-info">Almost done</span>'
    elif desc == '4':
        out = '<span class="label label-success">Done</span>'
    elif desc == '5':
        out = '<span class="label label-success">Production Ready</span>'
    elif desc == '-1':
        out = '<span class="label">Abandoned</span>'
    else:
        out = '<span class="label">' + '</span>'
    rn = nodes.raw(out)
    return [rn], []
