cd gh-pages && git co gh-pages && rsync -av ../app/ ./  && git ci -m"deployed `date`" . && sleep 1 && git push origin gh-pages
