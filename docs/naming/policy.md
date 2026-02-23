# AI Portfolio Naming Policy

## Scope
This policy applies to AI repositories under one owner:
- owner: `vishnu-madhavan-git`
- org usage: disabled for this portfolio layout

Lane labels are still used for organization:
- `client`
- `personal`
- `fork`
- `admin`

## Allowed repo name format
- `word`
- `word-word` (only when one word is unclear or already taken)

Pattern:

```text
^[a-z0-9]+(-[a-z0-9]+)?$
```

## Required constraints
1. lowercase only
2. no underscores
3. no random IDs/suffixes
4. no lane prefixes (`proj-`, `personal-`, etc.)
5. no version markers (`v0`, `v1`, `v2`, etc.)
6. understandable without extra context

## Reserved tokens (forbidden)
`tmp`, `test`, `misc`, `gh`, `proj`, `personal`, `final`, `new`, `copy`

## Good examples
- `nexlyn`
- `verifier`
- `automation`
- `autoflow`
- `openclaw`

## Bad examples
- `proj-ai-automation`
- `personal-open-claw`
- `github-connect-e340fd58`
- `chai_v1`
- `new-final-copy`

## Rename process
1. Confirm lane and in-scope (AI-only in this rollout).
2. Check destination name availability under `vishnu-madhavan-git`.
3. Rename/transfer using canonical one-word first naming.
4. Update `docs/naming/registry.yaml` in this repository.
5. Update local `origin` remotes.
6. Run naming validation checks.

## Approval
- Lane owner proposes rename.
- Portfolio admin (`vishnu-madhavan-git`) approves.
- Changes are recorded in `docs/naming/registry.yaml`.
