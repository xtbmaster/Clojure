;;; init.el --- Spacemacs Initialization File
;;
;; Copyright (c) 2012-2017 Sylvain Benner & Contributors
;;
;; Author: Sylvain Benner <sylvain.benner@gmail.com>
;; URL: https://github.com/syl20bnr/spacemacs
;;
;; This file is not part of GNU Emacs.
;;
;;; License: GPLv3

;; Without this comment emacs25 adds (package-initialize) here
;; (package-initialize)

;; Increase gc-cons-threshold, depending on your system you may set it back to a
;; lower value in your dotfile (function `dotspacemacs/user-config')
(setq gc-cons-threshold 100000000)

(defconst spacemacs-version          "0.200.10" "Spacemacs version.")
(defconst spacemacs-emacs-min-version   "24.4" "Minimal version of Emacs.")

(if (not (version<= spacemacs-emacs-min-version emacs-version))
    (error (concat "Your version of Emacs (%s) is too old. "
                   "Spacemacs requires Emacs version %s or above.")
           emacs-version spacemacs-emacs-min-version)
  (load-file (concat (file-name-directory load-file-name)
                     "core/core-load-paths.el"))
  (require 'core-spacemacs)
  (spacemacs/init)
  (configuration-layer/sync)
  (spacemacs-buffer/display-startup-note)
  (spacemacs/setup-startup-hook)
  (require 'server)
  (unless (server-running-p) (server-start)))

(add-to-list 'load-path "~/.emacs.d/site-lisp/")

(set-default-font "Source Code Pro-14")

(package-refresh-contents)
; list the packages you want
(setq package-list
  '(
     auto-indent-mode
     company
     highlight-symbol
     all-the-icons
     magit
     elpy
     clojure-mode
     ac-cider
     sunrise-commander
     clj-refactor
     better-defaults
     markdown-mode
     js2-mode
     json-mode
     flycheck-joker
     rainbow-mode
     aggressive-indent
        ))

(require 'package)
(require 'helm-bookmark)

(add-hook 'clojure-mode-hook #'my-clojure-mode-hook)
(add-to-list 'package-archives '("ELPY" . "http://jorgenschaefer.github.io/packages/") t)
(add-to-list 'package-archives '("MARMALADE" . "http://marmalade-repo.org/packages/") t)
(add-to-list 'package-archives '("MELPA-STABLE" . "http://melpa-stable.milkbox.net/packages/") t)
(add-to-list 'package-archives '("SC" . "http://joseito.republika.pl/sunrise-commander/") t)

; activate all the packages
(package-initialize)

; fetch the list of packages available 
(unless package-archive-contents
  (package-refresh-contents))

; install the missing packages
(dolist (package package-list)
  (unless (package-installed-p package)
    (package-install package)))

;; Poping-up contextual documentation

;; Added by Package.el.  This must come before configurations of
;; installed packages.  Don't delete this line.  If you don't want it,
;; just comment it out by adding a semicolon to the start of the line.
;; You may delete these explanatory comments.
(package-initialize)

(require 'flycheck-joker)

(defun my-clojure-mode-hook ()
  (clj-refactor-mode 1)
  (yas-minor-mode 1) ; for adding require/use/import statements
  ;; This choice of keybinding leaves cider-macroexpand-1 unbound
  (cljr-add-keybindings-with-prefix "C-c RET"))


(eval-after-load "cider"
  '(define-key cider-mode-map (kbd "C-c C-d h") 'ac-nrepl-popup-doc))

;; UTF-8 as default encoding
(set-language-environment "UTF-8")

;; Set the default comment column to 70
(setq-default comment-column 70)

;; Every time a window is started, make sure it get maximized
(add-to-list 'default-frame-alist '(fullscreen . maximized))

;; Enter cider mode when entering the clojure major mode
(add-hook 'clojure-mode-hook 'cider-mode)

(setq all-the-icons-color-icons t)
(setq all-the-icons-for-buffer t)


(setq sgml-xml-mode t)
;; associate xml, xsd, etc with nxml-mode
(add-to-list 'auto-mode-alist (cons (concat "\\." (regexp-opt '("xml" "xsd" "rng" "xslt" "xsl") t) "\\'") 'nxml-mode))
(setq nxml-slash-auto-complete-flag t)



(defun swap-windows ()
  "Put the buffer from the selected window in next window, and vice versa"
  (interactive)
  (let* ((this (selected-window))
          (other (next-window))
          (this-buffer (window-buffer this))
          (other-buffer (window-buffer other)))
    (set-window-buffer other this-buffer)
    (set-window-buffer this other-buffer)
    )
  )

(global-set-key (kbd "C-c s") 'swap-windows)

;; Turn on auto-completion with Company-Mode
(company-mode)

(add-hook 'cider-repl-mode-hook #'company-mode)
(add-hook 'cider-mode-hook #'company-mode)
;; (global-set-key (kbd "TAB") #'company-indent-or-complete-common)

(add-hook 'after-init-hook 'global-company-mode)
(add-hook 'after-init-hook 'global-flycheck-mode)

;; indent
(setq lisp-indent-offset 2)

;; Show parenthesis mode
(show-paren-mode 1)

;; Show parenthesis mode
(linum-relative-global-mode 1)

(defun set-auto-complete-as-completion-at-point-function ()
  (setq completion-at-point-functions '(auto-complete)))

(add-hook 'auto-complete-mode-hook 'set-auto-complete-as-completion-at-point-function)
(add-hook 'cider-mode-hook 'set-auto-complete-as-completion-at-point-function)

;; rainbow delimiters
(add-hook 'prog-mode-hook #'rainbow-delimiters-mode)

;; Configure helm-ag
;; Make sure to have Platinum Searcher installed: https://github.com/monochromegane/the_platinum_searcher

;; (custom-set-variables
;;  '(helm-ag-base-command "C:/platinum-searcher/pt -e --nocolor --nogroup"))

;; (global-set-key (kbd "M-s") 'helm-do-ag)

;; Syntax Highlighting
;; Add the following to your .emacs file:
;;(global-set-key [f3] 'highlight-symbol-next)
;;(global-set-key [(shift f3)] 'highlight-symbol-prev)
;;(global-set-key [(meta f3)] 'highlight-symbol-query-replace)

;;(add-to-list 'load-path "~/.emacs.d")

;;(setq mac-option-modifier 'super)
;;(setq mac-command-modifier 'meta)

;; Not to display warning window at the start
(setq warning-minimum-level :emergency)

(setq cider-repl-pop-to-buffer-on-connect 'display-only)
(setq cider-repl-display-help-banner 'nil)
(add-to-list 'aggressive-indent-excluded-modes 'html-mode)

(global-set-key (kbd "S-SPC") 'end-of-line)
(global-set-key (kbd "C-z") 'nil)
(global-set-key (kbd "S-j") 'sr-dired-prev-subdir)
(global-set-key (kbd "RET") 'newline-and-indent)
(global-set-key (kbd "C-c h") 'highlight-symbol)
(global-set-key (kbd "RET") 'newline-and-indent)

                                        ; magit
(global-set-key (kbd "C-x g") 'magit-status)
(global-set-key (kbd "C-x M-g") 'magit-dispatch-popup)


(autoload 'enable-paredit-mode "paredit" "Turn on pseudo-structural editing of Lisp code." t)
(add-hook 'emacs-lisp-mode-hook       #'enable-paredit-mode)
(add-hook 'eval-expression-minibuffer-setup-hook #'enable-paredit-mode)
(add-hook 'ielm-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-interaction-mode-hook #'enable-paredit-mode)
(add-hook 'scheme-mode-hook           #'enable-paredit-mode)

(global-aggressive-indent-mode 1)
(global-hl-line-mode 1)
(auto-indent-global-mode 1)
(rainbow-mode 1)

;; term
(setq explicit-shell-file-name "/bin/bash")

(defun term-exec-hook ()
  (let* ((buff (current-buffer))
          (proc (get-buffer-process buff)))
    (set-process-sentinel
      proc
      `(lambda (process event)
         (if (string= event "finished\n")
           (kill-buffer ,buff))))))

(add-hook 'term-exec-hook 'term-exec-hook)

(defun json-reformat-hook ()
  (when (string= (file-name-extension buffer-file-name) "json")
    (json-pretty-print-buffer)))

(add-hook 'find-file-hook 'json-reformat-hook)

(setq cider-cljs-lein-repl
  "(do (user/go)
           (user/cljs-repl))")

(setq-default tab-width 4)
(global-set-key [tab]
  'tab-to-tab-stop)

(setq cider-repl-use-clojure-font-lock t)
