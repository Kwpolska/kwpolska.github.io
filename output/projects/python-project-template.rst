.. title: Python Project Template
.. slug: python-project-template
.. date: 2013/02/08 14:47:42
.. description: INSERT TAGLINE HERE.™
.. status: 5

The Python Project Template is a sample template for Python projects,
including the Kw Release Scripts, sample PKGBUILDs, documentation, test suite,
``setup.py`` etc.

How to use
==========

Long story short:

.. code-block:: bash

    rm -rf .git
    find . | xargs sed 's/tEmplate/project/'
    find . | xargs sed 's/TEMPLATE/Project/'
    find . | xargs sed 's/TEMPLATE/Project/'
    find . | xargs sed 's/kwpolska@kwpolska.tk/john.doe@example.com/'
    find . | xargs sed 's/Kwpolska/John Doe/'
    sed 's/python-project-template' README* */README*
    mv tEmplate project

Where ``project`` is a lowercase name without spaces, and ``Project`` is the
full human-friendly name.

Usage of the template without performing all of the above commands can lead to
one or more of:

(a) You being deemed unprofessional and/or dumb;
(b) You being accused of stealing;
(c) Me being angry at you because you left **my** details in **your** code;
(d) Strange behavior and breakage.

If you believe something should be updated in the template, you know where to
find me.
