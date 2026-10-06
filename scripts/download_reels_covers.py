"""
Script utilitário para baixar capas dos Reels e posts mais recentes do Instagram @novosmensageiros.
Requisitos: pip install instaloader
Como rodar no terminal: python scripts/download_reels_covers.py
"""
import os
import sys

def main():
    try:
        import instaloader
    except ImportError:
        print("Instaloader nao encontrado. Instalando automaticamente...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "instaloader"])
        import instaloader

    profile_name = "novosmensageiros"
    target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "posts"))
    os.makedirs(target_dir, exist_ok=True)

    print(f"[*] Conectando ao Instagram para buscar posts de @{profile_name}...")
    L = instaloader.Instaloader(
        download_videos=False,
        download_video_thumbnails=True,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        post_metadata_txt_pattern=""
    )

    try:
        profile = instaloader.Profile.from_username(L.context, profile_name)
        count = 12
        print(f"[*] Baixando as capas dos ultimos {count} posts para: {target_dir}")
        for idx, post in enumerate(profile.get_posts()):
            if idx >= count:
                break
            print(f"[{idx+1}/{count}] Baixando post {post.shortcode}...")
            L.download_post(post, target=target_dir)
        print("\n[OK] Capas baixadas com sucesso!")
    except Exception as e:
        print(f"\n[!] Aviso: {e}")
        print("Dica: Se o Instagram solicitar login ou bloquear requisicao anonima, use a extensao 'Image Downloader' no Chrome para baixar em 1 clique.")

if __name__ == "__main__":
    main()
