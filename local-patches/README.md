# local-patches/

`.quartz/plugins/*` are gitignored, individually-cloned nested git repos (each has its own `.git`, origin, and HEAD), so `git add` from the outer repo silently no-ops on files inside them.

Patches here are exported (`git format-patch -1 HEAD --stdout`) from commits made *inside* the relevant nested plugin repo, so the outer repo's history documents the change even though `.quartz/` itself isn't tracked.

**Re-applying after `install-plugins`**: if the plugin is ever re-cloned/reinstalled, the nested commit is lost. Re-apply the patch from inside that plugin's directory, e.g.:

```
cd .quartz/plugins/note-properties
git apply ../../../local-patches/note-properties-lenient-frontmatter.patch
```
